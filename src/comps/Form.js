import React from "react";
import Display from "./Display";
import info_data from "./info.json"

function Form() {
  const initialInfo = {
    email: "",
    fullName: "",
    address: "",
    address2: "",
    city: "",
    province: "",
    postalCode: "",
    terms: false
  }

  const [info, setInfo] = React.useState(initialInfo);

  const [isFilled, setIsFilled] = React.useState(false);

  const checkNull = (data) => {
    return Object.values(data).some(d => d === "");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ info })
    const result = checkNull(info);
    if(result === false) {
      setIsFilled(true);
    }
  }

  const handleUpdate = (e) => {
    const { value, name } = e.target;
    setInfo({
      ...info,
      [name]: value
    })
  }

  const hadleUpdateTerm = (e) => {
    const { checked, name } = e.target;
    console.log({checked, name});
    setInfo({
      ...info,
      "terms": checked
    })
  };

  const capitalize = (text) => {
    const result = text.replace(/([A-Z])/g, " $1");
    return result.charAt(0).toUpperCase() + result.slice(1);
  }

  return (
    <form onSubmit={handleSubmit} className="w-full p-5" style={{border: '3px yellowgreen solid'}}>
      {!isFilled ? (
        <div className="row">
          {info_data.map((i, idx) => {
            if (i.type === "text") {
              return (
                <div key={idx} className={`${i.width} mb-3`}>
                  <label htmlFor={i.name} className="mb-1">{capitalize(i.name)}</label>
                  <input
                    id={i.name}
                    type={i.type}
                    name={i.name}
                    placeholder={`${i.placeholder ? i.placeholder : ""}`}
                    onChange={handleUpdate}
                    value={info[i.name]}
                    className="form-control"
                  />
                </div>
              )
            } else if (i.type == "select") {
              return (
                <div key={idx} className={`${i.width} mb-3`}>
                  <label htmlFor={i.name}>{capitalize(i.name)}</label>
                  <select className="form-control" onChange={handleUpdate} name={i.name}>
                    <option>Choose...</option>
                    {i.options.map((opt, idx) => {
                      return <option key={idx} value={opt}>{opt}</option>
                    })}
                  </select>
                </div>
              )
            } else {
              return (
                <div key={idx} className="d-flex justify-content-center mb-3  ">
                  <input
                    id={i.name}
                    type={i.type}
                    name={i.name}
                    onChange={hadleUpdateTerm}
                    value={info[i.name]}
                    className="form-check-input"
                  />
                  <label htmlFor={i.name} className="form-check-label">{i.label}</label>
                </div>
              )
            }
          })}
          <div className="d-flex justify-content-center">
            <button type="submit" className="d-flex justify-content-center btn btn-success">Submit</button>
          </div>
        </div>
      ) : (
        <Display info={info} />
      )}

    </form>
  )
}

export default Form;

