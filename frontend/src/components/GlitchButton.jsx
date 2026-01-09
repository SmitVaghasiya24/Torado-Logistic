function GlitchButton({ children, className = "", ...props }) {
  return (
    <button
      data-text={children}
      className={`glitch-btn relative font-bold overflow-visible ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default GlitchButton;
