import React from 'react';
import IconsSVG from './icons.svg';

const Icons = ({ name, color, ...props }) => {
  const { size, width, height } = props;
  return (
    <svg
      fill={color}
      stroke={color}
      width={size || width}
      height={size || height}
      aria-labelledby="title"
    >
      <title id="title">{name}</title>
      <use xlinkHref={`${IconsSVG}#${name}`} />
    </svg>
  )
}

export default Icons;
