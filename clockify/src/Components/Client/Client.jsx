import "./Styles/Client.css";

const Clients = () => {
  return (
    <div>
      <h1 className="clients_heading">Clients</h1>
      <div className="Clients_top">
        <div>
          <select name="" id="" className="Clients_select">
            <option value="">Show active</option>
            <option value="">Show archived</option>
            <option value="">Show all</option>
          </select>
          <input
            type="text"
            placeholder="Search by name"
            className="Clients_serachbyname"
          />
        </div>
        <div className="right">
          <input
            type="text"
            placeholder="Add a new client"
            className="Clients"
          />
          <button className="Clients_button">ADD</button>
        </div>
      </div>
      <div className="Clients_list">
        <span className="Clients_list_left">Name</span>
        <span className="Clients_list_right">Address</span>
      </div>
    </div>
  );
};

export default Clients;
