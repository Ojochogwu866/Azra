import { createContext, ReactNode, useContext } from 'react';

const TabsContext = createContext<
	| {
			activeTab: string;
			setActiveTab: (value: string) => void;
	  }
	| undefined
>(undefined);

interface TabsProps {
	value: string;
	onValueChange: (value: string) => void;
	children: ReactNode;
}

export function Tabs({ value, onValueChange, children }: TabsProps) {
	return (
		<TabsContext.Provider
			value={{ activeTab: value, setActiveTab: onValueChange }}
		>
			<div>{children}</div>
		</TabsContext.Provider>
	);
}

interface TabsListProps {
	className?: string;
	children: ReactNode;
}

export function TabsList({ className, children }: TabsListProps) {
	return <div className={className}>{children}</div>;
}

interface TabsTriggerProps {
	value: string;
	children: ReactNode;
}

export function TabsTrigger({ value, children }: TabsTriggerProps) {
	const context = useContext(TabsContext);
	if (!context)
		throw new Error('TabsTrigger must be used within a Tabs component');
	const { activeTab, setActiveTab } = context;

	return (
		<button
			className={`flex items-center border px-6 py-3 ${
				activeTab === value ? 'bg-gray-200' : ''
			}`}
			onClick={() => setActiveTab(value)}
		>
			{children}
		</button>
	);
}

interface TabsContentProps {
	value: string;
	className?: string;
	children: ReactNode;
}

export function TabsContent({ value, className, children }: TabsContentProps) {
	const context = useContext(TabsContext);
	if (!context)
		throw new Error('TabsContent must be used within a Tabs component');
	const { activeTab } = context;

	if (activeTab !== value) return null;

	return <div className={className}>{children}</div>;
}
