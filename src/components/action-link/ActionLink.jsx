import 'components/action-link/ActionLink.scss';

const ActionLink = (props) => {
  const { children, icon, ...attrs } = props;
  return (
    <a className="action-link" {...attrs}>{children}<i>{icon}</i></a>
  )
}

export default ActionLink;