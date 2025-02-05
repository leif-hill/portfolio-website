import MyBetes from "./projects/mybetes";
import MyBetesAlt from "./projects/mybetesalt";

function MiscProjects() {
    return (
        <div className="flex flex-wrap justify-center">
            <MyBetesAlt />
            <MyBetes />
      </div>
    );
}

export default MiscProjects;