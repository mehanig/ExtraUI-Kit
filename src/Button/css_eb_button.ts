import {CSSProperties} from '../css_types'

const css_base: CSSProperties = {
  fontSize: 11,
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  flexDirection: "column",
  fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
  color: '#fff',
  border: 0,
  width: '140px',
  height: '22px',
  borderRadius: '2px',
  padding: '2px 2px',
  margin: '10px',
  cursor: 'pointer',
  outline: 'none',
  userSelect: 'none'
};

const css_active : CSSProperties = {
  backgroundColor: '#2391FF',
  ':hover': {
    backgroundColor: '#0088FF',
  },
  ':focus': {
    backgroundColor: '#0088FF',
  },
  ':active': {
    backgroundColor: '#005299',
    transform: 'translateY(2px)',
  },
};

const css_disabled : CSSProperties = {
  backgroundColor: '#393939'
};

const css_p_base: CSSProperties = {
  margin: "auto"
};

export {css_base, css_active, css_disabled, css_p_base}