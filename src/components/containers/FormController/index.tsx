import {
  createRef,
  CSSProperties,
  ReactElement,
  ReactNode,
  RefObject,
  useEffect,
  useMemo,
} from "react";

interface FieldType<T> {
  name: keyof T;
  value: T[keyof T];
}

interface IFormRef extends HTMLFormElement {
  [key: number]: HTMLInputElement;
}

export interface FormInstance<T> {
  ref: RefObject<IFormRef>;
  getValues: () => T;
  setValues: (data: FieldType<T>[]) => void;
  resetValues: () => void;
}

export const useForm: <T>(
  initValues: T,
  onFormChange?: () => void
) => [Form: FormInstance<T>] = (initValues, onFormChange) => {
  type IInitialValues = typeof initValues;

  const formRef = createRef<IFormRef>();

  const initialValues: Record<
    keyof IInitialValues,
    IInitialValues[keyof IInitialValues] | undefined
  > = useMemo(() => ({ ...initValues }), [initValues]);

  function isEqual(
    object1: IInitialValues,
    object2: Record<
      keyof IInitialValues,
      IInitialValues[keyof IInitialValues] | undefined
    >
  ) {
    const props1 = Object.getOwnPropertyNames(object1);
    const props2 = Object.getOwnPropertyNames(object2);

    if (props1.length !== props2.length) {
      return false;
    }

    for (let i = 0; i < props1.length; i += 1) {
      const prop: keyof IInitialValues = props1[i] as keyof IInitialValues;

      if (object1[prop] !== object2[prop]) {
        return false;
      }
    }

    return true;
  }

  const Form = useMemo<FormInstance<IInitialValues>>(
    () => ({
      ref: formRef,
      getValues: () => {
        return initialValues as IInitialValues;
      },
      setValues: (data) => {
        data.forEach((element) => {
          if (initialValues.hasOwnProperty(element.name)) {
            initialValues[element.name] = element.value;

            Object.keys(initialValues).forEach((obj, index) => {
              if (formRef.current?.[index] && obj === element.name) {
                formRef.current[index].value = element.value as any;
              }
            });
          }
        });
      },
      resetValues: () => {
        const objKeys = Object.keys(initialValues) as Array<
          keyof IInitialValues
        >;

        objKeys.forEach((obj, index) => {
          if (initValues && initValues[obj]) {
            initialValues[obj] = initValues[obj];
          } else {
            initialValues[obj] = undefined;
          }

          if (formRef.current?.[index]) {
            if (initValues && initValues[obj]) {
              formRef.current[index].value = initValues[obj] as any;
            } else {
              formRef.current[index].value = "";
            }
          }
        });
      },
    }),
    [initialValues, formRef]
  );

  useEffect(() => {
    let index = 0;

    const initForm = (index: number) => {
      if (formRef?.current?.[index]) {
        if (initValues[formRef.current[index].name as keyof IInitialValues]) {
          formRef.current[index].value = initValues[
            formRef.current[index].name as keyof IInitialValues
          ] as any;
          initialValues[formRef.current[index].name as keyof IInitialValues] =
            initValues[
              formRef?.current[index].name as keyof IInitialValues
            ] as any;
        } else {
          initialValues[formRef.current[index].name as keyof IInitialValues] =
            undefined;
        }

        initForm(index + 1);
      }
    };

    initForm(index);

    //  eslint-disable-next-line
  }, [formRef]);

  useEffect(() => {
    if (formRef && formRef.current) {
      const objKeys = Object.keys(initialValues) as Array<keyof IInitialValues>;

      objKeys.forEach((obj, index) => {
        if (formRef.current?.[index]) {
          formRef.current?.[index].addEventListener("input", (e: any) => {
            if (initialValues) {
              initialValues[obj] = e.target.value ? e.target.value : undefined;
              if (isEqual(initValues, initialValues) && onFormChange) {
                onFormChange();
              }
            }
          });
        }
      });
    }
  }, [formRef, initialValues]);

  return [Form];
};

interface IControllerProps<T> {
  form: FormInstance<T>;
  className?: string;
  style?: CSSProperties;
}

export function FormController<T>({
  children,
  form,
  className,
  style,
}: IControllerProps<T> & {
  children?: ReactNode | HTMLInputElement;
}): ReactElement {
  return (
    <form ref={form.ref} style={style} className={className}>
      {children}
    </form>
  );
}
