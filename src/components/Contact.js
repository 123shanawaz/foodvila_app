import Logo from "../assets/img/contact.png";
const Contact = () => {
  return (
    <div className="flex-wrap justify-evenly flex overflow-y-hidden mt-20">
      <div className="w-80">
        <img src={Logo} />
      </div>

      <div className="px-5">
        <h1 className="font-bold m-2 p-2 text-lg">Contact with us</h1>
        <form className="flex flex-col bg-white">
          <input className="p-2 m-2 border" type="text" placeholder="Name" required />
          <input className="p-2 m-2 border" placeholder="Email" required />
          <textarea  className="p-2 m-2 border" placeholder="type something here...." required></textarea>
          <button className="shadow-md bg-blue-500    border-none border-r-4 m-3 pl-2 py-2 cursor-pointer" type="submit">Submit</button>
        </form>
      </div>
    </div>
  ); 
};
export default Contact;
