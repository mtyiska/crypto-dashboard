import Card from "../components/Card";
import CustomChart from "../components/CustomChart";

const Dashboard = () =>{
    return (
        <div className=" min-h-screen h-screen">
            <div className="px-8 py-1">
                <p className="text-gray-500 text-lg">Bitcoin</p>
                <p className="text-green-100 font-bold text-2xl transform -translate-y-2">
                    Michael Tyiska
                </p>
            </div>
            <div className="flex p-4 space-x-3">
                <Card title="TOTAL" balance={409.0790} icon={0} />
                <Card title="AVAILABLE" balance={300.0790} icon={1} />
                <Card title="CLAIMABLE REWARD" balance={100.0790} icon={2} />
                <Card title="DELEGATED" balance={339.0790} icon={3} />
            </div>
            <div className="flex ml-3 mt-6 space-x-6 mr-4">
                <CustomChart/>
            </div>

        </div>
    )
}

export default Dashboard;