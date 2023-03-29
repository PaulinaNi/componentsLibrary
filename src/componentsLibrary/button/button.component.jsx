import './button.style.css'

export default function Button(props) {
 const { buttonText, buttonOnClick } = props
 return (
  <button
   className='buttonComponent'
   onClick={buttonOnClick}
  >
   {buttonText}
  </button>
 )
}