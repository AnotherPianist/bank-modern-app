export default function Button({ styles }) {
  return (
    <button
      type="button"
      className={`bg-blue-gradient rounded-lg py-4 px-6 font-poppins text-lg font-medium text-primary outline-none ${styles}`}
    >
      Get Started
    </button>
  );
}
