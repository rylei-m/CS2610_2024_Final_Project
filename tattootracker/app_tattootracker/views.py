from django.http import JsonResponse
from django.contrib.auth.decorators import login_required
from .forms import TattooForm
from django.shortcuts import render, get_object_or_404, redirect
from .models import Tattoo


def home(request):
    tattoo = Tattoo.objects.first()
    return render(request, 'base.html', {'tattoo': tattoo})


def signup_success(request):
    return render(request, 'signup_success.html')


@login_required
def upload_tattoo(request):
    if request.method == 'POST':
        form = TattooForm(request.POST, request.FILES)
        if form.is_valid():
            tattoo = form.save(commit=False)
            tattoo.user = request.user
            if 'is_public' in request.POST:
                tattoo.is_public = True
            tattoo.save()
            return redirect('view_tattoos')
    else:
        form = TattooForm()
    return render(request, 'upload_tattoo.html', {'form': form})


def view_tattoos(request):
    if request.user.is_authenticated:
        tattoos = Tattoo.objects.filter(user=request.user)
        return render(request, 'view_tattoos.html', {'tattoos': tattoos})
    else:
        return redirect('public_gallery')


@login_required
def upload_handler(request):
    if request.method == 'POST' and request.FILES:
        form = TattooForm(request.POST, request.FILES)
        if form.is_valid():
            new_tattoo = form.save(commit=False)
            new_tattoo.user = request.user
            new_tattoo.save()
            return JsonResponse({'message': 'Success'}, status=200)
        else:
            return JsonResponse({'error': 'Form is not valid'}, status=400)
    return JsonResponse({'error': 'This method is not allowed'}, status=405)


def edit_tattoo(request, tattoo_id):
    tattoo = get_object_or_404(Tattoo, pk=tattoo_id)
    if request.method == 'POST':
        form = TattooForm(request.POST, request.FILES, instance=tattoo)
        if form.is_valid():
            form.save()
            return redirect('view_tattoos')
    else:
        form = TattooForm(instance=tattoo)
    return render(request, 'edit_tattoo.html', {'form': form, 'tattoo': tattoo})


def home_view(request):
    return render(request, 'base.html')


def public_gallery(request):
    public_tattoos = Tattoo.objects.filter(is_public=True)
    return render(request, 'public_gallery.html', {'tattoos': public_tattoos})


def delete_tattoo(request, tattoo_id):
    tattoo = get_object_or_404(Tattoo, pk=tattoo_id)
    if request.method == 'POST':
        tattoo.delete()
        return redirect('view_tattoos')
    return render(request, 'confirm_delete.html', {'tattoo': tattoo})


def delete_tattoo_confirm(request, tattoo_id):
    tattoo = get_object_or_404(Tattoo, pk=tattoo_id)
    if request.method == 'POST':
        tattoo.delete()
        return redirect('view_tattoos')
    return render(request, 'confirm_delete.html', {'tattoo': tattoo})
