import { Component, Suspense, useEffect, useState } from "react";

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

class SceneBoundary extends Component {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch() {
    this.props.onUnavailable?.();
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}

export default function OptionalScene({ children, onUnavailable }) {
  const [reducedMotion, setReducedMotion] = useState(
    () => window.matchMedia(reducedMotionQuery).matches
  );

  useEffect(() => {
    const preference = window.matchMedia(reducedMotionQuery);
    const updatePreference = ({ matches }) => {
      setReducedMotion(matches);
      if (matches) onUnavailable?.();
    };
    updatePreference(preference);
    preference.addEventListener("change", updatePreference);
    return () => preference.removeEventListener("change", updatePreference);
  }, [onUnavailable]);

  if (reducedMotion) return null;

  return (
    <SceneBoundary onUnavailable={onUnavailable}>
      <Suspense fallback={null}>{children}</Suspense>
    </SceneBoundary>
  );
}
