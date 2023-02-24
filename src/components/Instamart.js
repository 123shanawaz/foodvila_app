 import { useState } from "react";

const Section = ({ title, discription, isVisible, setisVisible }) => {
  return (
    <div className="border border-black m-2 p-2">
      <h1 className="font-bold">{title}</h1>
      {isVisible ? (
        
       
    <button
          className="bg-black text-white p-2 m-2 rounded-3xl cursor-pointer"
          onClick={() => setisVisible(false)}
        >
          Hide
        </button>
       
      ) : (
        <button
        className="bg-black text-white p-2 m-2 rounded-3xl cursor-pointer"
        onClick={() => setisVisible(true)}
      >
        Show
      </button>
        
      )}

      {isVisible && <p>{discription}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visiblesection, setvisiblesection] = useState("about");
  return (
    <div>
      <h1 className="text-3xl m-2 p-2 font-bold">Instamaert</h1>
      <Section
        title={"about instamart"}
        discription={
          "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
        }
        isVisible={visiblesection==="about"}
        setisVisible={() =>
          setvisiblesection(visiblesection==="about"?" ":"about"
          )
        }
      />

      <Section
        title={"Team instamart"}
        discription={
          "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
        }
        isVisible={visiblesection==="Team"}
        setisVisible={() =>
          setvisiblesection(visiblesection==="Team"?"":"Team"
          )
        }
      />

      <Section
        title={"carrer instamart"}
        discription={
          "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
        }
        isVisible={visiblesection==="carrer"}
        setisVisible={() =>
          setvisiblesection(visiblesection==="carrer"?"":"carrer")
        }
      />
    </div>
  );
};

export default Instamart;
