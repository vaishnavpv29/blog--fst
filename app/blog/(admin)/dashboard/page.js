
import dashStyles from "./dashboard.module.css";


export default function AdminDashboard() {
  return (
    <div className={dashStyles.dashboardContainer}>
      <h2>Admin Dashboard</h2>
      <form className={dashStyles.dashboardForm}>
        <input type="text" placeholder="Title" />
        <textarea placeholder="Content" />
        <button type="button" className={dashStyles.dashboardButton}>Create</button>
      </form>
      <hr />
      <h3>All Posts</h3>
     
    </div>
  );
}
