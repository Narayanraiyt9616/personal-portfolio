import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export default function Reveal({ as: Tag = "div", stagger = false, className = "", children, ...rest }) {
  const [ref, isVisible] = useIntersectionObserver();
  const base = stagger ? "reveal-stagger" : "reveal";
  return (
    <Tag ref={ref} className={`${base} ${isVisible ? "is-visible" : ""} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
