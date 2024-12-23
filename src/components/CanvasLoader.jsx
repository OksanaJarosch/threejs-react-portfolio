import {Html} from "@react-three/drei";

const CanvasLoader = ({ progress }) => {
    return (
        <Html
            as='div'
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}
        >
            <span className='canvas-loader' />
            <p style={{
                fontSize: 14,
                color: '#f1f1f1',
                marginTop: 40
                }}
            >
                {progress !== 0 ? `${progress.toFixed(2)}%` : 'Loading...'}
            </p>
        </Html>
    )
};

export default CanvasLoader;