import "./Card.css";

export const Card = ({ id, title, tags, userId }) => {
  return (
    <div className="card">
      <div className="card-header font-medium">
        <div className="card-heading">
          <p className="card-id">{id}</p>
          <div className="card-profile-image">
            {userId[0] + userId[userId.length - 1]}
          </div>
        </div>

        <p className="card-title">{title}</p>
      </div>

      <div className="card-actions">
        <div className="card-actions-button font-medium">...</div>
        {tags.length > 0 &&
          tags.map((tag, index) => (
            <div key={index} className="card-actions-button font-medium">
              <div className="card-action-tag" />
              {tag}
            </div>
          ))}
      </div>
    </div>
  );
};
