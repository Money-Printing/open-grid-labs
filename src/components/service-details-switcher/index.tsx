import { useParams, Navigate } from "react-router";
import React from "react";

interface ServiceDetailsSwitcherProps {
	componentMap: Record<string, React.ComponentType>;
	fallbackPath: string;
}

export default function ServiceDetailsSwitcher({ componentMap, fallbackPath }: ServiceDetailsSwitcherProps) {
	const { serviceId } = useParams<{ serviceId: string }>();

	if (!serviceId) {
		return <Navigate to={fallbackPath} replace />;
	}

	const Component = componentMap[serviceId];

	if (!Component) {
		return <Navigate to={fallbackPath} replace />;
	}

	return <Component />;
}
