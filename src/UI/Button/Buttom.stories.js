import Button from "./Button";

export default {
    title:'Ui-Kit/Button',
    component: Button

}

const props = {
    onClick: ()=>console.log('Next Click'), 
    name : 'Next', 
    disabled : false,
    theme : 'dark',
    classes:''

}


export const Disabled = {
    args: {
        ...props,
        disabled:true,
    },
  };

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
    render: () => <Button {...Dark} />,
  };