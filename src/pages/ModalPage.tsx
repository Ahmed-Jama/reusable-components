import { useState } from "react";
import Modal from "@/components/Modal";
import Button from "@/components/Button";

const ModalPage = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <Button primary onClick={() => setShowModal(false)}>
      Accept!
    </Button>
  );

  return (
    <div>
      <Button primary onClick={() => setShowModal(!showModal)}>
        Open Modal
      </Button>
      {showModal && (
        <Modal onClose={handleClose} actionBar={actionBar}>
          <h1 className="mb-2 font-serif text-2xl font-bold">Modal</h1>
          <p className="text-md text-justify max-md:text-sm max-sm:text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            molestias, quasi vitae modi quis dolorum reprehenderit itaque
            perferendis totam dolor commodi repellat veniam facere nihil
            blanditiis saepe inventore cumque praesentium ullam soluta
            voluptatum nobis! Corrupti dolore tempora, sit deserunt porro fuga
            iure, quo iusto facilis hic beatae. Exercitationem. Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. laudantium repudiandae.
          </p>
        </Modal>
      )}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quaerat
        in rerum sed, tempore amet, quibusdam maiores, nihil vero fugit
        voluptate minima obcaecati est odio perferendis vel recusandae corrupti
        quos similique nobis nulla? Aliquam illo odit obcaecati odio totam vero
        tenetur possimus quaerat provident iste repellendus ipsa asperiores
        dolores hic animi, fugiat voluptatum autem repellat omnis laboriosam id
        incidunt. Consequuntur amet facere explicabo at nulla, soluta officia
        cum, rerum vitae magnam omnis inventore quis. Quibusdam ipsum, doloribus
        recusandae totam voluptatibus nam expedita iure suscipit, repudiandae
        exercitationem voluptatum perferendis autem modi sapiente quod.
        Molestiae dolor libero voluptas quis eius, nisi distinctio in ab eveniet
        rem minima ipsum, blanditiis repellat sunt earum saepe dolores
        accusantium eos unde facilis aliquam ut? Omnis cum amet labore, nobis
        molestias fugiat commodi aliquam, voluptatum possimus, sequi quasi
        libero non praesentium dolorum accusantium quod temporibus nemo a
        assumenda perspiciatis culpa sunt quis nihil maxime. Ad exercitationem,
        deleniti obcaecati debitis culpa in quos eaque id quibusdam eveniet
        aspernatur minus voluptates quis optio distinctio quisquam dolorem.
        Nesciunt ducimus error, voluptates quod libero officia nulla dolore
        harum blanditiis quaerat ipsam illo iste cumque porro, impedit, esse
        odit? Ad, rerum maxime perferendis consequatur quasi minima quis illo
        atque harum! Architecto distinctio nemo beatae, molestias hic voluptas
        molestiae qui, nam facere officiis nobis harum voluptate corporis earum
        explicabo libero eos sapiente sunt magnam id porro voluptates
        consequatur a. Aspernatur, explicabo deserunt velit reiciendis ad odio
        omnis necessitatibus repellat, perspiciatis, in nulla rem sequi sit
        praesentium veniam nobis amet delectus obcaecati! Inventore atque ut
        aliquam corrupti fugiat voluptatibus, maxime similique facere dolorem,
        quis, nesciunt impedit officiis est voluptatem optio possimus molestias
        eum labore. Laudantium quae consequatur unde iure? Porro minima aut,
        exercitationem sunt dolorem, error obcaecati ipsam itaque cum debitis
        vero non odio quo impedit voluptate sed doloribus facere, modi nostrum?
        Culpa a repellendus distinctio, labore est necessitatibus voluptatem
        temporibus iusto dignissimos quod commodi similique consectetur dolor
        harum. Quo dignissimos asperiores, officiis quidem rerum non recusandae
        hic odit eius vel nesciunt possimus suscipit quibusdam ea consequatur
        molestias, maiores excepturi aspernatur dolore. Illo, vero, temporibus
        aliquid culpa libero voluptas quaerat unde, ducimus totam dolorum
        asperiores. Inventore, magni! Porro ea debitis, fugit expedita libero
        numquam harum dolores vel vero veniam. Possimus aspernatur accusamus
        esse nostrum nisi rerum. Rerum sint iste hic illo, magnam numquam dolore
        distinctio, sequi optio dicta ipsam enim esse natus quas voluptate,
        fugit maiores? Quaerat impedit mollitia esse pariatur nemo suscipit
        accusamus perferendis corporis! Natus dolorem quod corrupti magnam saepe
        eius, eveniet ab hic voluptatum quia amet porro nihil quas similique
        beatae iure accusantium aliquid eum? Aperiam reprehenderit nam eos
        reiciendis voluptatum temporibus voluptates ratione quod repellendus
        quas neque eum nobis esse impedit aliquid, blanditiis quae eius.
        Voluptates aliquid saepe molestiae obcaecati id mollitia pariatur,
        voluptas blanditiis aliquam iste accusamus voluptatibus tempore repellat
        deleniti quo veritatis delectus assumenda ducimus sint perspiciatis?
        Sunt maiores dolor dignissimos quidem libero, vitae commodi earum
        consectetur nemo nesciunt iusto? Asperiores earum ullam cum natus
        eligendi sequi voluptate delectus. Unde repellat quam magni laudantium
        dicta aliquid rem libero.
      </p>
    </div>
  );
};

export default ModalPage;
