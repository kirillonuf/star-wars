import Input from './Input.jsx';



export default {
    title:'Ui-Kit/Input',
    component: Input

}

const props = {
    classes:'', 
    value:'dfgv', 
    placeholder:"fdfddd", 
    handleInputChange:(e)=> e.target.value='',
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
    render: () => <Input {...props} />,
  };