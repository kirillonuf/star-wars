import Video from "./Video";
import video from './video/black-hole.mp4';

export default {
    title:'Ui-Kit/Video',
    component: Video

}

const props = {
    // theme : 'dark',
    classes:''

}
  export const Primary = {
    render: () => <Video src={video} {...props} />,
  };