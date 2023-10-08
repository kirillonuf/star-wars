import Loading from "./Loading";

export default {
    title:'Ui-Kit/Loading',
    component: Loading

}

const props = {
    theme : 'dark',
    classes:''

}

export const Dark = {
    args: {
        ...props,
        theme:'dark',
    },
  };

  export const Light = {
    args: {
        ...props,
        theme:'light',
    },
  };
  export const Primary = {
    render: () => <Loading {...Dark} />,
  };