function SkillCard({ item }) {
  return (
    <div className="skill-item">
      <div className="skill-icon">
        <i className={item.iconClass} aria-hidden="true" />
      </div>
      <span className="skill-name">{item.name}</span>
    </div>
  );
}

export default SkillCard;
