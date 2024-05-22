import RainbowHeart from '@/../public/images/RainbowHeart.svg';
import Image from 'next/image';

const FillerHeart = () => {
  return (
    <Image
      src={RainbowHeart}
      alt={
        'Heart coloured with stripes of the rainbow pride flag, used as filler content'
      }
      sizes="(max-width: 1200px) 15vw, 10vw"
      style={{
        width: '100%',
        height: 'auto',
      }}
    />
  );
};

export default FillerHeart;
