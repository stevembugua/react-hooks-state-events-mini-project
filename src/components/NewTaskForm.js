import React, { useState } from "react";

function NewTaskForm({ categories , onTaskFormSubmit }) {

  const [formData, setFormData] = useState({
    text : "",
    category : ""
  })


  const options = categories.map((category) => {
    if (category === 'All'){
      return false
    }
    return (
      <option key={category} value={category}>
        {category}
      </option>
    );
  });

  // Controlled form inputed onChange event
  function handleChange(e) {
    let name = e.target.name;
    setFormData({
      ...formData,
      [name] : e.target.value
    })
  }

  // handle form submission
  function handleSubmit(e) {
    e.preventDefault()
    onTaskFormSubmit(formData)
    
  }
 
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={formData.text} onChange={handleChange}/>
      </label>
      <label>
        Category
        <select name="category" value={formData.category} onChange={handleChange}>
          {/* render <option> elements for each category here */}
          {options}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;