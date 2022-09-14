import Img from './Img';

const Picture = ({ ...props }) => {
  const { alt, src, srcSet } = props;

  return (
    <picture>
      <source
        media="(-webkit-min-device-pixel-ratio: 1.5), (min-resolution: 192dpi)"
        srcSet={srcSet}
      / >
      <Img
        src={src}
        alt={alt}
      />
    </picture>
  );
}

export default Picture;
