import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateValue } from "../features/userBasicForm";
function UserForm() {
  const userFormValues = useSelector((state) => state.userForm);
  const dispatch = useDispatch();
  return (
    <div>
      <label>
        <input
          name="names"
          onChange={(e) => {
            dispatch(updateValue({ name: "names", value: e.target.value }));
          }}
          placeholder="Name"
          value={userFormValues["names"]}
        ></input>
      </label>
      <label>
        <input
          name="age"
          onChange={(e) => {
            dispatch(updateValue({ name: "age", value: e.target.value }));
          }}
          placeholder="age"
          value={userFormValues["age"]}
        ></input>
      </label>
      <label>
        <input
          name="location"
          onChange={(e) => {
            dispatch(updateValue({ name: "location", value: e.target.value }));
          }}
          placeholder="location"
          value={userFormValues["location"]}
        ></input>
      </label>
      <h2>
        <button>Submit</button>
      </h2>
    </div>
  );
}

export default UserForm;
