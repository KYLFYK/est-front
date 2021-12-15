
interface Props {
    url?: string
}

export const ThreeDTour: React.FC<Props> = ({url}) => {

    return (
        <>
            {
                !!url &&
                <iframe style={{borderRadius:'6px'}} width="100%" height="960" src={url} title="YouTube video player"
                        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
                        gyroscope; picture-in-picture" allowFullScreen></iframe>
            }
        </>
    )
}