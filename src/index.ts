import { TranslationMessages } from 'ra-core';

const polishMessages: TranslationMessages = {
    ra: {
        action: {
            add_filter: 'Dodaj filtr',
            add: 'Dodaj',
            back: 'Powrót',
            bulk_actions: 'Zaznaczono %{smart_count}',
            cancel: 'Anuluj',
            clear_array_input: 'Wyczyść',
            clear_input_value: 'Wyczyść',
            clone: 'Sklonuj',
            confirm: 'Potwierdź',
            create: 'Dodaj',
            create_item: 'Utwórz element',
            delete: 'Usuń',
            edit: 'Edytuj',
            export: 'Eksportuj',
            list: 'Lista',
            refresh: 'Odśwież',
            remove_filter: 'Usuń filtr',
            remove_all_filters: 'Usuń wszystkie filtry',
            remove: 'Usuń',
            save: 'Zapisz',
            search: 'Szukaj',
            select_all: 'Zaznacz wszystkie',
            select_all_button: 'Select all',
            select_row: 'Zaznacz wiersz',
            show: 'Pokaż',
            sort: 'Sortuj',
            undo: 'Cofnij',
            unselect: 'Odznacz',
            expand: 'Rozwiń',
            close: 'Zamknij',
            open_menu: 'Otwórz menu',
            close_menu: 'Zamknij menu',
            update: 'Aktualizuj',
            move_up: 'Przesuń w górę',
            move_down: 'Przesuń w dół',
            open: 'Otwórz',
            toggle_theme: 'Zmień motyw',
            select_columns: 'Wybierz kolumny',
            update_application: 'Aktualizuj aplikację',
            new_contact: 'Nowy kontakt',
            new_company: 'Nowa firma',
            create_deal: 'Utwórz transakcję',
        },
        boolean: {
            true: 'Yes',
            false: 'No',
            null: ' ',
        },
        page: {
            create: 'Create %{name}',
            dashboard: 'Dashboard',
            edit: '%{name} #%{id}',
            error: 'Coś poszło nie tak',
            list: 'Lista %{name}',
            loading: 'Ładowanie',
            not_found: 'Nie znaleziono',
            show: '%{name} #%{id}',
            empty: 'Nie utworzono %{name}.',
            invite: 'Czy chcesz dodać nowy?',
            access_denied: 'Brak dostępu',
            authentication_error: 'Błąd autoryzacji',
        },
        input: {
            file: {
                upload_several:
                    'Przeciągnij kilka plików, aby je przesłać, lub kliknij, aby wybrać jeden.',
                upload_single: 'Przeciągnij plik, aby go przesłać, lub kliknij, aby go wybrać.',
            },
            image: {
                upload_several:
                    'Przeciągnij kilka obrazów, aby je przesłać, lub kliknij, aby wybrać jeden.',
                upload_single:
                    'Przeciągnij obraz, aby go przesłać, lub kliknij, aby go wybrać.',
            },
            references: {
                all_missing: 'Nie można znaleźć danych referencyjnych.',
                many_missing:
                    'Przynajmniej jeden z powiązanych referencji nie jest już dostępny.',
                single_missing:
                    'Powiązana referencja nie jest już dostępna.',
            },
            password: {
                toggle_visible: 'Ukryj hasło',
                toggle_hidden: 'Pokaż hasło',
            },
        },
        message: {
            about: 'O nas',
            access_denied:
                "Nie masz odpowiednich uprawnień, aby uzyskać dostęp do tej strony.",
            are_you_sure: 'Jesteś pewien?',
            authentication_error:
                'Serwer uwierzytelniania zwrócił błąd i nie można było zweryfikować Twoich poświadczeń.',
            auth_error:
                'Nieprawidłowe dane logowania',
            bulk_delete_content:
                'Czy jesteś pewien że chcesz usunąć %{name}? |||| Czy jesteś pewien że chcesz usunąć te %{smart_count} rekordów?',
            bulk_delete_title:
                'Usuń %{name} |||| Usuń %{smart_count} %{name} rekordy',
            bulk_update_content:
                'Czy na pewno chcesz zaktualizować %{name}? |||| Czy na pewno chcesz zaktualizować te %{smart_count} rekordy?',
            bulk_update_title:
                'Aktualizuj %{name} |||| Aktualizuj %{smart_count} %{name} rekordy',
            clear_array_input: 'Czy na pewno chcesz wyczyścić wszystkie dane?',
            delete_content: 'Czy na pewno chcesz usunąć ten rekord?',
            delete_title: 'Usuń %{name} #%{id}',
            details: 'Szczegóły',
            error: 'Wystąpił błąd, twoje żądanie nie zostało ukończone',
            invalid_form: 'Formularz nie jest poprawny, sprawdź błędy.',
            loading: 'Strona jest ładowana, poczekaj tylko chwilę.',
            no: 'Nie',
            not_found:
                'Wpisałeś zły URL lub zostałeś niepoprawnie przeniesiony.',
            select_all_limit_reached:
                'Jest zbyt wiele elementów, aby wybrać je wszystkie. Wybrano tylko pierwsze %{max} elementów.',
            unsaved_changes:
                "Niektóre zmiany nie zostały zapisane. Czy jesteś pewien, że chcesz je zignorować?",
            yes: 'Tak',
            placeholder_data_warning: 'Problem z siecią: Odświeżenie danych nie powiodło się.',
        },
        navigation: {
            clear_filters: 'Wyczyść filtry',
            no_filtered_results: 'Brak wyników po filtrowaniu',
            no_results: 'Nie znaleziono wyników',
            no_more_results:
                'Numer strony %{page} znajduje się poza granicą. Spróbuj poprzednią stronę.',
            page_out_of_boundaries: 'Numer strony %{page} znajduje się poza granicą',
            page_out_from_end: 'Nie można przejść dalej niż ostatnia strona',
            page_out_from_begin: 'Nie można przejść wcześniej niż pierwsza strona',
            page_range_info: '%{offsetBegin}-%{offsetEnd} z %{total}',
            partial_page_range_info:
                '%{offsetBegin}-%{offsetEnd} z więcej niż %{offsetEnd}',
            current_page: 'Aktualna strona',
            page: 'Strona',
            first: 'Pierwsza',
            last: 'Ostatnia',
            next: 'Następna',
            previous: 'Poprzednia',
            page_rows_per_page: 'Wiersze na stronę:',
            skip_nav: 'Przejdź do treści',
        },
        sort: {
            sort_by: 'Sortuj wg. %{field} %{order}',
            ASC: 'rosnąco',
            DESC: 'malejąco',
        },
        auth: {
            auth_check_error: 'Zaloguj się, aby kontynuować',
            user_menu: 'Profil',
            username: 'Nazwa użytkownika',
            password: 'Hasło',
            email: 'Email',
            sign_in: 'Zaloguj',
            sign_in_error: 'Logowanie się nie powiodło, spróbuj ponownie',
            logout: 'Wyloguj',
            new_user: 'Nowy użytkownik',
        },
        notification: {
            updated: 'Element zaktualizowany |||| Zaktualizowano %{smart_count} elementów',
            created: 'Element stworzony',
            deleted: 'Element usunięty |||| Usunięto %{smart_count} elementów',
            bad_item: 'Niepoprawny element',
            item_doesnt_exist: 'Element nie istnieje',
            http_error: 'Problem z połączeniem serwera',
            data_provider_error: 'Błąd przy pobieraniu danych. Sprawdź konsolę.',
            i18n_error: 'Nie można załadować tłumaczeń dla określonego języka',
            canceled: 'Akcja anulowana',
            logged_out: 'Twoja sesja wygasła, zaloguj się ponownie.',
            not_authorized: 'Brak dostępu',
            application_update_available: 'Dostępna jest nowa wersja aplikacji. Odśwież stronę.',
        },
        validation: {
            required: 'Wymagany',
            minLength: 'Musi być minimum %{min} znaków',
            maxLength: 'Musi być maksimum %{max} znaków',
            minValue: 'Musi być minimum %{min}',
            maxValue: 'Musi być maksimum %{max}',
            number: 'Musi być liczbą',
            email: 'Musi być poprawnym adresem email',
            oneOf: 'Musi być jednym z: %{options}',
            regex: 'Musi pasować do konkretnego formatu (regexp): %{pattern}',
            unique: 'Must be unique',
        },
        saved_queries: {
            label: 'Zapisane zapytania',
            query_name: 'Nazwa zapytania',
            new_label: 'Nowe zapytanie',
            new_dialog_title: 'Zapisz zapytanie',
            remove_label: 'Usuń zapisane zapytanie',
            remove_label_with_name: 'Usuń zapisane zapytanie "%{name}"',
            remove_dialog_title: 'Usuń zapisane zapytanie',
            remove_message: 'Usuń zapisane zapytanie',
            help: 'Zapisane zapytania pozwalają na zapisanie złożonych zapytań, które można później łatwo odzyskać. Zapisane zapytania są dostępne dla wszystkich użytkowników.',
        },
        configurable: {
            customize: 'Dostosuj',
            configureMode: 'Skonfiguruj tę stronę',
            inspector: {
                title: 'Inspektor',
                content: 'Najedź kursorem na elementy interfejsu aplikacji, aby je skonfigurować',
                reset: 'Zresetuj ustawienia',
                hideAll: 'Ukryj wszystko',
                showAll: 'Pokaż wszystko',
            },
            Datagrid: {
                title: 'Tabela danych',
                unlabeled: 'Nieopisana kolumna #%{column}',
            },
            SimpleForm: {
                title: 'Formularz',
                unlabeled: 'Nieopisane pole #%{input}',
            },
            SimpleList: {
                title: 'Lista',
                primaryText: 'Tekst główny',
                secondaryText: 'Tekst pomocniczy',
                tertiaryText: 'Tekst trzeciorzędowy',
            },
        },
    },
    resources: {
        customers: {
            fields: {
                first_name: 'Imię',
                last_name: 'Nazwisko',
                dob: 'Data urodzenia',
            },
        },
        customer: {
            name: 'Customer |||| Customers',
        },
        // Add other resources as needed
    },
    // ... other keys if necessary ...
};

export default polishMessages;