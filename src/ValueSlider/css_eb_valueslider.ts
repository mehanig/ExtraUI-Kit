import {CSSProperties} from '../css_types'

const main_base: CSSProperties = {
  display: "flex",
  justifyContent: "flex-start",
  flexDirection: "row",
  alignItems: "center",
  fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
  borderBottom: '1px solid black',
  height: '20px',
  color: '#fff',
  fontSize: 11,
  padding: '2px 2px',
  outline: 'none',
  userSelect: 'none',
  listStyle: 'none',
  margin: '10px',
};

const main_disabled: CSSProperties = {

};

const main_active: CSSProperties = {

};

const title: CSSProperties = {
  cursor: 'pointer'
};

const draggable: CSSProperties = {
  color: '#2391FF',
  ':hover': {
    color: '#0088FF',
  },
  cursor: 'pointer',
  marginLeft: 'auto'
};

const li_disabled : CSSProperties = {
  backgroundColor: '#989898'
};

const main_base2: CSSProperties = {
  fontSize: 11,
  display: 'flex',
  float: "left",
  flexDirection: "column",
  margin: '10px',
  color: '#fff',
};

const input_field: CSSProperties = {
  width: '50px'
}




export {main_base, main_disabled, main_active, title, draggable, input_field}