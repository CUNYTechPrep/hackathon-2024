import React from 'react';

const EventList = () => {
  const events = [
    { date: 'AUG 19', title: 'Hackathon Orientation/Q&A', time: 'Mon 10:00am - 10:45am', duration: '45mins' },
    { date: 'AUG 19', title: 'Hackathon 101', time: 'Mon 11:00am - 11:45am', duration: '45mins' },
    { date: 'AUG 19', title: 'How to use GitHub', time: 'Mon 1:00pm - 2:00pm', duration: '1hr' },
    { date: 'AUG 19', title: 'Basics of Software Development Lifecycle', time: 'Mon 3:00pm - 4:00pm', duration: '1hr' },
    { date: 'AUG 19', title: 'Panels Discussion on Careers in Data Science, AI, & Startup', time: 'Mon 5:00pm - 6:00pm', duration: '1hr' },
    { date: 'AUG 20', title: 'Networking: Crafting a LinkedIn Profile that Attracts Recruiters', time: 'Tues 11:00am - 12:00pm', duration: '1hr' },
    { date: 'AUG 20', title: 'Build, host, and deploy webapps in 10min with Python', time: 'Tue 12:30pm - 1:30pm', duration: '1hr' },
    { date: 'AUG 20', title: 'CTP Alumni talk on Teamwork (title TBD)', time: 'Tues 3:00pm - 4:00pm', duration: '1hr' },
    { date: 'AUG 20', title: 'Recruiting Q/A Office Hour: Lyft', time: 'Tues 5:00pm - 6:00pm', duration: '1hr' },
  ];

  return (
    <div className="flex flex-col md:flex-row w-full p-4">
      {/* Left Side: Hackathon Highlights */}
      <div className="flex-1 bg-white bg-opacity-20 backdrop-blur-sm p-4 rounded-lg shadow-lg h-80 overflow-y-auto">
        <h3 className="text-2xl font-bold mb-4 text-white">Hackathon Highlights</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-200">
          <li>Technical & Professional Development Workshops</li>
          <li>GitHub, Networking, Career Development, Hackathon tips, Python, and more</li>
          <li>Recruiting Office Hours</li>
          <li>Q&A with Early Career Recruiters from Asana and Lyft</li>
          <li>Collaborative Project Hacking</li>
          <li>Learning new technologies through in-person OR online</li>
          <li>Mentorship</li>
          <li>Technical and project pitching support from industry professionals, CTP Alumni, and CUNY Student Affairs</li>
          <li>Prizes</li>
          <li>Team prizes donated by CTP Hacks 2024 sponsors</li>
        </ul>
      </div>

      {/* Right Side: Event List */}
      <div className="flex-1 bg-white bg-opacity-20 backdrop-blur-sm p-4 rounded-lg shadow-lg md:ml-4 mt-4 md:mt-0 h-80 overflow-y-auto">
        <h3 className="text-2xl font-bold mb-4 text-white">Workshops Schedule</h3>
        <ul className="space-y-4">
          {events.map((event, index) => (
            <li key={index} className="border-b border-gray-600 pb-4">
              <div className="grid grid-cols-12 gap-2 items-center text-white">
                <div className="col-span-2 text-pink-500 font-bold text-lg">
                  {event.date}
                </div>
                <div className="col-span-7">
                  <div className="font-semibold text-lg">{event.title}</div>
                  <div className="text-gray-300 text-sm">{event.time}</div>
                </div>
                <div className="col-span-3 text-right">
                  <div className="text-gray-300 text-sm">{event.duration}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EventList;
