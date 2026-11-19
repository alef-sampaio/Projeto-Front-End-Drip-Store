export default function FilterGroup({ title, inputType = 'checkbox', options, selected = [], onChange }) {
  return (
    <div className="fgroup">
      <h4>{title}</h4>
      {options.map((o) => (
        <label key={o.text}>
          <input type={inputType} name={title} value={o.text} checked={selected.includes(o.text)}
            onChange={() => onChange && onChange(o.text)} />
          {o.text}
        </label>
      ))}
    </div>
  )
}
