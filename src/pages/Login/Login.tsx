import { ipcRenderer } from 'electron';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './Login.scss'

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (formData: any) => {
    console.log(formData)
    try {
      await ipcRenderer.invoke('LOGIN', formData);
      navigate('/dashboard')
    } catch (e: any) {
      console.log('Soy el error ', e)
    }
  }

  return (
    <div id='customers-login'>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Ingrese cuenta de IG desde la cual va a trabajar</h2>
          <div>
            <label htmlFor='username'>
              Username
            </label>
            <input type='text' { ...register('username', {
              required: true
            }) } />
            { errors.username?.type === 'required' && <p>El campo Username es requerido</p> }
          </div>
          <div>
            <label htmlFor='password'>
              Password
            </label>
            <input type='text' { ...register('password', {
              required: true
            }) } />
            { errors.password?.type === 'required' && <p>El campo password es requerido</p> }
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Login
