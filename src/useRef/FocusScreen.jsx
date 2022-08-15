import { useRef } from "react"

export const FocusScreen = () => {

  const inputRef = useRef()

  const onClick = () => {
    inputRef.current.select()
  }

  return (
    <>
      <div>Focus Scree</div>
      <hr />

      <input
        ref={ inputRef }
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control"
      />

      <button 
        className="btn btn-primary mt-2"
        onClick={ onClick }
      >
        Set Focus
      </button>
    </>
  )
}
