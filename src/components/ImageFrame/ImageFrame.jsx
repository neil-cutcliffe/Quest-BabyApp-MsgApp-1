/**********************************************************************
 *
 *   Component generated by Quest
 *
 *   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts.
 *   To preserve that ability, always export from Quest to regenerate this file.
 *   To setup element attributes and CSS properties, use the Quest web app
 *   Code Logic goes in the hook associated with this component
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';
import { styled } from '@mui/material/styles';

const ImageFrame1 = styled('div')({
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  width: '100%',
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `10px`,
  boxSizing: `border-box`,
  height: 'auto',
});

const Image1 = styled('div', {
  shouldForwardProp: (prop) => !['props'].includes(prop.toString()),
})(({ props }) => ({
  backgroundPosition: `center`,
  backgroundSize: `cover`,
  backgroundRepeat: `no-repeat`,
  borderRadius: `6px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  alignSelf: `stretch`,
  height: `251px`,
  margin: `0px`,
  backgroundImage: props.post.image,
}));

function ImageFrame(props) {
  return (
    <ImageFrame1 className={props.className}>
      <Image1 props={props}></Image1>
    </ImageFrame1>
  );
}

export default ImageFrame;
