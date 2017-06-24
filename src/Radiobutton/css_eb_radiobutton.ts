import {CSSProperties} from '../css_types'

const li_base: CSSProperties = {
  display: "flex",
  justifyContent: "flex-start",
  flexDirection: "row",
  alignItems: "center",
  fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
  border: 0,
  height: '20px',
  padding: '2px 2px',
  outline: 'none',
  userSelect: 'none',
  listStyle: 'none'
};

const li_active : CSSProperties = {
  // backgroundColor: '#2391FF',
  // ':hover': {
  //   backgroundColor: '#0088FF'
  // },
  // ':focus': {
  //   backgroundColor: '#0088FF'
  // },
  // ':active': {
  //   backgroundColor: '#005299'
  // },
};

const li_disabled : CSSProperties = {
  backgroundColor: '#989898'
};

const ul_base: CSSProperties = {
  fontSize: 11,
  display: 'flex',
  float: "left",
  flexDirection: "column",
  margin: '10px',
  color: '#fff',
};

const input: CSSProperties = {
  margin: "0 5px 0 0",
  cursor: 'pointer',
};

const input_disabled: CSSProperties = {
  ':checked': {
    color:'#393939'
  }
};

const input_active: CSSProperties = {

};

const text: CSSProperties = {
  margin: "0 0 5px 0",
  cursor: 'pointer'
};

const title: CSSProperties = {
  fontSize: 13,
  margin: '0 0 8px 2px',
  cursor: 'pointer'
};

export {li_base, li_active, li_disabled, ul_base, text, input, input_disabled, input_active, title}