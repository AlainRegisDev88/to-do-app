import './Skeleton.css'

const UserNameSkeleton = ({width = "100px", height = "30px", borderRadius = '5px'}) => {
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

export default UserNameSkeleton;