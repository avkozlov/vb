from django.shortcuts import render
from django.shortcuts import render_to_response
from django.template import RequestContext

# Create your views here.

def home(request):

    red = request.subdomain
    rk = request.domain
    lair = request.lair

    return render_to_response("home.html", locals(), context_instance=RequestContext(request))