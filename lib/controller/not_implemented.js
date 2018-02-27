const respond = res => res.status(501).json({message: 'Method is not yet implemented.'});
export default class NotImplementedController {
	list(req, res){ respond(res) }
	create(req, res){ respond(res) }
	view(req, res){ respond(res) }
	update(req, res){ respond(res) }
	delete(req, res){ respond(res) }
}