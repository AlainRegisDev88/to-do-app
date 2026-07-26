import './Skeleton.css'

const Skeleton = ({width = "40px", height = "40px", borderRadius = '50%'}) => {
    return (
        <div
            className="skeleton-loader"
            style={{
                width,
                height,
                borderRadius,
            }}
        />
    );
}

export default Skeleton;