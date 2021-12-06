import ButtonPanel, { ICreateObjectControls } from "../ButtonsPanel/ButtonsPanel"

interface Props extends ICreateObjectControls {
}

const HouseInfoInterierTab: React.FC<Props> = ({ onNextTab, onPrevTab }) => {
    return (
        <ButtonPanel onNextTab={onNextTab} onPrevTab={onPrevTab}>
            <div>
                House Interier
            </div>
        </ButtonPanel>
    )
}

export default HouseInfoInterierTab