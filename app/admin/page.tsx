import GoogleButton from '../../uiComponents/GoogleButton';
import SignIn from '../../uiComponents/SignIn';

function AdminSignIn() {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 mt-2">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Войти как администратор
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <GoogleButton />
        <div> or </div>
        <SignIn />
      </div>
    </div>
  );
}

export default AdminSignIn;
