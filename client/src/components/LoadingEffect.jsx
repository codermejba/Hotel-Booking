import React from 'react'

const LoadingEffect = ({loading}) => {
  return (
    <>
    {loading && (
        <div
          className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-white bg-opacity-75"
          style={{ zIndex: 10 }}
        >
          <div className="spinner-border primary-color " role="status">
          </div>
        </div>
      )}
    </>
  )
}

export default LoadingEffect