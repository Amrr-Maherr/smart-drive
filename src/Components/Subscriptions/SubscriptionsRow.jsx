import SubscriptionsCard from "../Subscriptions/SubscriptionsCard"
export default function SubscriptionsRow() {
    return (
        <>
        <div className="w-[90%] mx-auto flex items-center justify-between flex-wrap">
            <SubscriptionsCard/>
            <SubscriptionsCard/>
            <SubscriptionsCard/>
            <SubscriptionsCard/>
        </div>
        </>
    )
}