import { Form, Field, FormSpy } from 'react-final-form'
// @ts-ignore
import { OnChange } from 'react-final-form-listeners'


export const MyForm = () => {
    const onSubmit = (val: any) => console.log(val);
    return (
        <Form
          onSubmit={onSubmit}
          subscription={{values: true}}
          onChange={onSubmit}
          test='ddd'
          render={({ handleSubmit, ...config }) => (
            <form onSubmit={(event) => {
                console.log('config', config);
                handleSubmit(event);
            }}>
                <FormSpy onChange={(val) => console.log('spy', val)} />
        <OnChange name="firstName">
            {(value: any, previous: any) => {
              console.log('ddddddd', value, previous)
            }}
          </OnChange>
              <h2>Simple Default Input</h2>
              <div>
                <label>First Name</label>
                <Field name="firstName" component="input" placeholder="First Name" />
              </div>
      
              <h2>An Arbitrary Reusable Input Component</h2>
              <div>
                <label>Interests</label>
                <Field name="interests" component="input" />
              </div>
      
              <h2>Render Function</h2>
              <Field
                name="bio"
                render={({ input, meta }) => (
                  <div>
                    <label>Bio</label>
                    <textarea {...input} />
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </div>
                )}
              />
      
              <h2>Render Function as Children</h2>
              <Field name="phone">
                {({ input, meta }) => (
                  <div>
                    <label>Phone</label>
                    <input type="text" {...input} placeholder="Phone" />
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
      
              <button type="submit">Submit</button>
            </form>
          )}
        />
      );
}