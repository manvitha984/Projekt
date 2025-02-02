import AdminSidebar from "./adminsidebar"; // Import the sidebar component

export default function adminprojects() {
  const projects = [
    {
      title: "Website Redesign",
      description: "Revamp the UI/UX for better user engagement.",
      status: "In Progress",
      deadline: "Sept 30, 2024",
    },
    {
      title: "Mobile App Development",
      description: "Develop an iOS and Android version of our product.",
      status: "Pending",
      deadline: "Oct 15, 2024",
    },
    {
      title: "SEO Optimization",
      description: "Enhance search engine ranking and traffic.",
      status: "Completed",
      deadline: "Aug 20, 2024",
    },
  ];

  return (
    <div className="min-h-screen flex bg-[#FFF8F8]">
      

      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Projects Overview</h1>
        <p className="text-lg text-gray-600 mb-8">Manage and track all assigned projects.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <p className="text-gray-700 font-semibold">
                Status: <span className="text-[#FE6059]">{project.status}</span>
              </p>
              <p className="text-gray-500">Deadline: {project.deadline}</p>
            </div>
          ))}
        </div>



      </div>
    </div>
  );
}