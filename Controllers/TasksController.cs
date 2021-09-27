using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
//using System.Web.Mvc;
using TaskServiceAPI.DAL_Layer;

namespace TaskServiceAPI.Controllers
{
    [Authorize]
    [RoutePrefix("api/Tasks")]
    public class TasksController : ApiController
    {

        static TaskDBEntities db = new TaskDBEntities();

        [Route("GetTasks")]
        [HttpGet]
        public IHttpActionResult GetTasks()
        {
            var tasks = db.tblTasks.ToList();

            if (tasks == null)
                throw new HttpResponseException(HttpStatusCode.NotFound);
            else
                return Ok(tasks);
        }


        [Route("GetTasks")]
        [HttpGet]
        public IHttpActionResult GetTasks(int id)
        {
            var task = db.tblTasks.ToList().Where(x => x.QuoteID == id);

            if (task == null)
            {
                var resp = new HttpResponseMessage(HttpStatusCode.NotFound)
                {
                    Content = new StringContent(string.Format("No Task with QuoteID = {0}", id)),
                    ReasonPhrase = "QuoteID Not Found"
                };
                throw new HttpResponseException(resp);
            }
            else
                return Ok(task);
        }

        [Route("PostTasks")]
        [HttpPost]
        public IHttpActionResult PostTasks([FromBody] tblTask tbltask)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            else
            {
                var task = db.tblTasks.Add(tbltask);
                db.SaveChanges();
                return Ok(task);
            }
        }

        [Route("DeleteTasks")]
        [HttpDelete]
        public IHttpActionResult DeleteTasks(int id)
        {
            var task = db.tblTasks.ToList().FirstOrDefault(x => x.QuoteID == id);
            var deletedTask = db.tblTasks.Remove(task);
            db.SaveChanges();
            return Ok(task);
        }


        [Route("PutTasks")]
        [HttpPut]
        public HttpResponseMessage PutTasks([FromBody] tblTask task)
        {

            var putTask = db.tblTasks.ToList().FirstOrDefault(x => x.QuoteID == task.QuoteID);
            if (putTask != null)
            {
                putTask.QuoteID = task.QuoteID;
                putTask.Quote_Type = task.Quote_Type;
                putTask.Contact = task.Contact;
                putTask.Task = task.Task;
                putTask.Due_Date = task.Due_Date;
                putTask.Task_type = task.Task_type;
                db.SaveChanges();
                HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK, putTask);
                response.Headers.Add("Access-Control-Allow-Origin", "*");
                return response;
            }
            else
            {
                var message = string.Format("Task with Quote ID  = {0} not found", task.QuoteID);
                HttpError err = new HttpError(message);
                HttpResponseMessage response = Request.CreateErrorResponse(HttpStatusCode.NotFound, err);
                response.Headers.Add("Access-Control-Allow-Origin", "*");
                return response;

            }
        }

        [Route("PatchTasks")]
        [HttpPatch]
        public IHttpActionResult PatchTasks(int id, [FromBody] tblTask task)
        {
            var updateTask = db.tblTasks.ToList().FirstOrDefault(x => x.QuoteID == id);
            if(updateTask != null)
            {
               // updateTask.QuoteID = task.QuoteID;
                //updateTask.Quote_Type = task.Quote_Type;
                //updateTask.Contact = task.Contact;
                updateTask.Task = task.Task;
               // updateTask.Due_Date = task.Due_Date;
               // updateTask.Task_type = task.Task_type;
                db.SaveChanges();
                return Ok(updateTask);
            }
            else
            {
                return BadRequest();
            }   
            
        }

    }
}
        /*
        // GET: Tasks
        public ActionResult Index()
        {
            return View(db.tblTasks.ToList());
        }

        // GET: Tasks/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            tblTask tblTask = db.tblTasks.Find(id);
            if (tblTask == null)
            {
                return HttpNotFound();
            }
            return View(tblTask);
        }

        // GET: Tasks/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Tasks/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https:/go.microsoft.com/fwlink/?LinkId=317598
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "QuoteID,Quote_Type,Contact,Task,Due_Date,Task_type")] tblTask tblTask)
        {
            if (ModelState.IsValid)
            {
                db.tblTasks.Add(tblTask);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(tblTask);
        }

        // GET: Tasks/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            tblTask tblTask = db.tblTasks.Find(id);
            if (tblTask == null)
            {
                return HttpNotFound();
            }
            return View(tblTask);
        }

        // POST: Tasks/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https:/go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "QuoteID,Quote_Type,Contact,Task,Due_Date,Task_type")] tblTask tblTask)
        {
            if (ModelState.IsValid)
            {
                db.Entry(tblTask).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(tblTask);
        }

        // GET: Tasks/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            tblTask tblTask = db.tblTasks.Find(id);
            if (tblTask == null)
            {
                return HttpNotFound();
            }
            return View(tblTask);
        }

        // POST: Tasks/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            tblTask tblTask = db.tblTasks.Find(id);
            db.tblTasks.Remove(tblTask);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }*/
 
 
