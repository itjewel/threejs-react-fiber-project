import { NextPage } from "next";

import { ThreeExampleLayout } from "Layouts";
import { ThreeExampleMorphTargetCube } from "ThreeHelpers";

const Layout: NextPage = () => {
	return <ThreeExampleLayout title="Example: Morph Target / Cube Created by Jewel Farazi" example={ThreeExampleMorphTargetCube} />;
};

export default Layout;
