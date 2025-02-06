import MyBetes from "./projects/mybetes";
import StudyTracker from "./projects/studytracker";

function CSProjects() {
    return (
        <div className="flex flex-wrap justify-center">
            <MyBetes />
            <StudyTracker />
      </div>
    );
}

export default CSProjects;