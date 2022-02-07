import {
  createRef,
  CSSProperties,
  ReactElement,
  ReactNode,
  RefObject,
  useEffect,
  useState,
} from "react";

interface FieldType<T> {
  name: keyof T;
  value: T[keyof T];
}

export interface FormInstance<T> {
  ref: RefObject<HTMLFormElement>;
  getValues: () => T;
  setValues: (data: FieldType<T>[]) => void;
  resetValues: () => void;
}

export const useForm: <T>(initValues: T) => [Form: FormInstance<T>] = (
  initValues
) => {
  type IInitialValues = typeof initValues;

  const formRef = createRef<HTMLFormElement>();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  let initialValues: Record<
    keyof IInitialValues,
    IInitialValues[keyof IInitialValues] | undefined
  > = { ...initValues };

  const [Form] = useState<FormInstance<IInitialValues>>({
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
              // @ts-ignore
              formRef.current?.[index].value = element.value;
            }
          });
        }
      });
    },
    resetValues: () => {
      const objKeys = Object.keys(initialValues) as Array<
        keyof typeof initValues
      >;

      objKeys.forEach((obj, index) => {
        if (initValues && initValues[obj]) {
          initialValues[obj] = initValues[obj];
        } else {
          initialValues[obj] = undefined;
        }

        if (formRef.current?.[index]) {
          if (initValues && initValues[obj]) {
            // @ts-ignore
            formRef.current?.[index].value = initValues[obj];
          } else {
            // @ts-ignore
            formRef.current?.[index].value = "";
          }
        }
      });
    },
  });

  useEffect(() => {
    let index = 0;

    const initForm = (index: number) => {
      if (formRef?.current?.[index]) {
        // @ts-ignore
        if (initValues[formRef?.current[index].name]) {
          // @ts-ignore
          formRef?.current[index].value =
            // @ts-ignore
            initValues[formRef?.current[index].name];
          // @ts-ignore
          initialValues[formRef?.current[index].name] =
            // @ts-ignore
            initValues[formRef?.current[index].name];
        } else {
          // @ts-ignore
          initialValues[formRef?.current[index].name] = undefined;
        }

        initForm(index + 1);
      }
    };

    initForm(index);

    //  eslint-disable-next-line
  }, [formRef]);

  useEffect(() => {
    if (formRef && formRef.current) {
      const objKeys = Object.keys(initialValues) as Array<
        keyof typeof initValues
      >;

      objKeys.forEach((obj, index) => {
        if (formRef.current?.[index]) {
          formRef.current?.[index].addEventListener("input", (e: any) => {
            if (initialValues) {
              initialValues[obj] = e.target.value ? e.target.value : undefined;
            }
          });
        }
      });
    }

    //  eslint-disable-next-line
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
}: IControllerProps<T> & { children?: ReactNode }): ReactElement {
  // logic etc.
  return (
    <form ref={form.ref} style={style} className={className}>
      {children}
    </form>
  );
}
